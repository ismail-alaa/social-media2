import React from 'react'
import { Card, Skeleton } from "@heroui/react";
export default function SkeletonLoading() {
    return (
        <div className="flex flex-col gap-3">
            <Card className="w-full mx-auto space-y-5 py-10 px-2 max-w-xl" radius="lg">
                <Skeleton className="rounded-lg" >
                    <div className="h-24 rounded-lg bg-default" />
                </Skeleton>
                <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg" >
                        <div className="h-3 w-full rounded-lg bg-default" />
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-full rounded-lg bg-default-300" />
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg" >
                        <div className="h-3 w-full rounded-lg bg-default-200" />
                    </Skeleton>
                </div>
            </Card>
            <Card className="w-full mx-auto space-y-5 py-10 px-2 max-w-xl" radius="lg">
                <Skeleton className="rounded-lg" >
                    <div className="h-24 rounded-lg bg-default" />
                </Skeleton>
                <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg" >
                        <div className="h-3 w-full rounded-lg bg-default" />
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-full rounded-lg bg-default-300" />
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg" >
                        <div className="h-3 w-full rounded-lg bg-default-200" />
                    </Skeleton>
                </div>
            </Card>
        </div>
    )
}
