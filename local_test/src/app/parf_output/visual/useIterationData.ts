"use client";

import { useState, useEffect } from "react";
import { trpc } from '../../../trpc/react';

export interface Parameter {
  type: "Char_Poi" | "Char_Ber" | "Char_BerVec";
  values: { min: number; max: number; lambda: number } | number | number[];
}

export interface IterationData {
  [key: string]: Parameter;
}

export const useIterationData = () => {
  const [currentIteration, setCurrentIteration] = useState(0);

  const { data: iterationData = [], refetch } = trpc.iterationdata.getIterationData.useQuery();

  useEffect(() => {
    if (iterationData.length > 0) {
      setCurrentIteration(iterationData.length - 1); // 当数据加载成功时更新当前迭代
    }
  }, [iterationData]); // 监听 data 的变化

  return [iterationData, currentIteration, refetch] as const;
};