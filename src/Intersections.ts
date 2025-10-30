type t1 = { id: number };
type t2 = { name: string };
type t3 = t1 & t2;

const obj: t3 = { id: 1, name: "Test" };
