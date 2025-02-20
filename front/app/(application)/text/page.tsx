"use client";

import { useEffect, useState } from "react";

import { getRepositoryMembers } from "@/lib/services/gitlab/repository";

export default function TEST() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => await getRepositoryMembers("1");

    fetchData().then((value) => {
      setData(value);
    });
  }, []);

  return <>{data.length}</>;
}
