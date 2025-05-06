"use client";

import { addBlock, getAllBlocks } from "@/lib/services/blockchain/block-chain";
import { getRepositoryMembers } from "@/lib/services/gitlab/repository";
import { TBlock } from "@/types/block";
import { Card, CardBody } from "@heroui/card";
import { useState, useEffect } from "react";


export default function TEST() {
  const [ blocks, setBlocks] = useState<TBlock>();

  useEffect(() => {
    addBlock({
        trust: 10
    })
    // getAllBlocks().then((value) => {
    //     console.log(value);
    // });
  }, []);

  if (!blocks) return <></>;

  return <>{blocks.data.map((data, index) => 
        <Card key={index}>
            <CardBody>
                {data.header.batch_ids}
            </CardBody>
        </Card>
  )}</>;

}
