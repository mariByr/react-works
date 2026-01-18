import {useSearchParams} from "react-router-dom";


export const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1'})
    const nextPage = () => {
        let currentPage = Number(query.get("page") || 1);
        setQuery({page: (++currentPage).toString()});
    };

    const previousPage = () => {
        let currentPage = Number(query.get("page") || 1);

        if (currentPage > 1) {
            setQuery({page: (--currentPage).toString()});
        }
    };
    return (

        <div className={'flex items-center gap-10 text-3xl'}>
            <button className={'border-gray-500'} onClick={previousPage}>previous</button>
            <button onClick={nextPage}>next</button>
        </div>
    )
}
