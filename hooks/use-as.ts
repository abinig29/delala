import { paginationKeys } from '@/lib/constant';
import { removeKeys } from '@/lib/util/utils';
import { useSearchParams } from 'next/navigation';
import qs from 'query-string';

const useCustomSearchParams = (searchTextName: string) => {
    const searchParams = useSearchParams();
    const current = qs.parse(searchParams ? searchParams.toString() : '');
    const filter = removeKeys(current, paginationKeys(searchTextName))
    const bothSort = current?.sort as string | undefined
    const splitSort = bothSort?.split(".")

    const query = qs.stringifyUrl({
        url: '',
        query: {
            ...(current?.page && { page: current?.page, }),
            ...(splitSort?.[0] && { sort: splitSort?.[0], }),
            ...(splitSort?.[1] && { sortOrder: splitSort?.[1], }),
            ...(current?.searchText && { searchText: current[searchTextName] }),
            ...(current?.per_page && { limit: current?.per_page, }),
            ...filter

        },
    }, { skipEmptyString: true, skipNull: true });

return { current, query };
};

export default useCustomSearchParams;
