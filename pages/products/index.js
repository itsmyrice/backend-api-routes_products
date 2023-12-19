import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// function FetchedData() {
//     const { data } = useSWR("/api/products", fetcher)
//     return <div>{data}</div>
// }

export default function FetchedData() {
    const { data, isLoading } = useSWR("/api/products", fetcher);
    if(isLoading) {
        return <div>Loading...</div>
    }
    if(!data) {
        return;
    }
    return (
        <ul>
            {data.map((product) => (
                <li key={product.id}>
                    <Link href={`/${product.id}`}>{product.name}</Link>
                </li>
            ))}
        </ul>
    );
}