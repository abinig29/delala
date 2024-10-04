"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";

export function PaginationCustom({ pages }: { pages: number }) {
    const MAX_VISIBLE_PAGES = 3;
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const page = Number(searchParams?.get('page'))
    const activePage = page === 0 ? 1 : page
    console.log(activePage)

    const handlePaginate = (n: number) => {
        const current = qs.parse(searchParams ? searchParams.toString() : '');
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                ...current,
                page: n.toString(),
            }
        }, { skipEmptyString: true, skipNull: true });
        router.push(url);
    }
    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage = activePage - 1;
        let endPage = activePage + 1;

        if (startPage > 1) {
            pageNumbers.push(
                <PaginationItem key="start-ellipsis">
                    <PaginationLink >...</PaginationLink>
                </PaginationItem>
            );
        }

        startPage = Math.max(1, startPage);
        endPage = Math.min(pages, endPage);

        for (let number = startPage; number <= endPage; number++) {
            pageNumbers.push(
                <PaginationItem key={number}>
                    <PaginationLink
                        onClick={() => handlePaginate(number)}
                        isActive={number === activePage}>
                        {number}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        if (endPage < pages) {
            pageNumbers.push(
                <PaginationItem key="end-ellipsis">
                    <PaginationLink >...</PaginationLink>
                </PaginationItem>
            );
        }

        return pageNumbers;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem
                    onClick={() => handlePaginate(activePage > 1 ? activePage - 1 : 1)}>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                {renderPageNumbers()}
                <PaginationItem
                    onClick={() => handlePaginate(activePage < pages ? activePage + 1 : pages)}>

                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
