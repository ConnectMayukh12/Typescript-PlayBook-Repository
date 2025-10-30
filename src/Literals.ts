const raw = '{"id":1,"name":"Alice"}';
const parsed = JSON.parse(raw);

const riskyUser = JSON.parse(raw) as { id: number; name: string };

console.log(riskyUser);
console.log(parsed);
