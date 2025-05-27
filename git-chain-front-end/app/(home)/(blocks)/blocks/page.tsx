"use client";

import {Card} from "@heroui/react";

const blocks = [
    {id: 1, title: "Block 1", content: "Content for block 1"},
    {id: 2, title: "Block 2", content: "Content for block 2"},
    {id: 3, title: "Block 3", content: "Content for block 3"},
    {id: 4, title: "Block 4", content: "Content for block 4"}
];

interface BlockProps {
    title: string;
    content: string;
}

const Block = ({title, content}: BlockProps) => {
    return (
        <Card className="p-4">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </Card>
    );
};

export default function BlocksPage() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Content Blocks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blocks.map((block) => (
                    <Block key={block.id} title={block.title} content={block.content}/>
                ))}
            </div>
        </div>
    );
}