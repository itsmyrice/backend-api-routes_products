import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher);

    if(isLoading) {
        return <div>Loading...</div>
    }
    if(!data) {
        return;
    }

    return (
        <div>
            <p>ID: {id}</p>
            <h1>{data.name}</h1>
        </div>
    );
}