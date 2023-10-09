import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/redusers/pagination.movies.slise";

export function PaginationCard() {
  const currentPage = useSelector((state) => state.pagination.CURRENT_PAGE);

  const dispatch = useDispatch();

  const handleChange = (event, page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Stack spacing={2}>
      <Pagination
        siblingCount={0}
        size="small"
        count={50}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
