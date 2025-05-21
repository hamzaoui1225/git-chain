import hashlib
import json
import logging
import sys
from sawtooth_sdk.processor.handler import TransactionHandler
from sawtooth_sdk.processor.exceptions import InvalidTransaction
from sawtooth_sdk.processor.core import TransactionProcessor

LOGGER = logging.getLogger(__name__)

FAMILY_NAME = "scorechain"

def get_address(username):
    """Generate a unique state address for a username."""
    namespace = hashlib.sha512(FAMILY_NAME.encode("utf-8")).hexdigest()[:6]
    user_address = hashlib.sha512(username.encode("utf-8")).hexdigest()[:64]
    return namespace + user_address

class ScorechainHandler(TransactionHandler):
    family_name = FAMILY_NAME
    family_versions = ["0.1"]
    namespaces = [FAMILY_NAME[:6]]

    def __init__(self):
        super().__init__(self.family_name, self.family_versions, self.namespaces)

    def apply(self, transaction, context):
        payload = json.loads(transaction.payload.decode("utf-8"))
        username = payload.get("username")
        score_change = payload.get("score")

        if not username or not isinstance(score_change, int):
            raise InvalidTransaction("Invalid payload format")

        state = context.get_state([get_address(username)])
        current_score = 0
        tpi = 0
        tai = 0
        tci = 0
        ci = 0
        b = 0

        tri = (1*tpi) + (1*tai) + (1*tci) + (1*ci) + b
        if state and get_address(username) in state:
            current_score = int(json.loads(state[get_address(username)])["score"])

        new_score = current_score + score_change

        context.set_state({
            get_address(username): json.dumps({"username": username, "score": new_score}).encode("utf-8")
        })

        LOGGER.info(f"Updated {username}'s score to {new_score}")

def main():
    logging.basicConfig(level=logging.INFO)
    processor = TransactionProcessor(url="tcp://sawtooth-validator:4004")
    handler = ScorechainHandler()
    processor.add_handler(handler)
    processor.start()

if __name__ == "__main__":
    main()
