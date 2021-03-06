import React, { useEffect, useState } from "react";
import sample from "../../shared/data/sample.json";
import ReactPaginate from "react-paginate";

const items = [];
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => {
          const msec = Date.parse(item.date);
          const d = new Intl.DateTimeFormat("en-US", {
            dateStyle: "long",
          }).format(msec);

          return (
            <tr className="text-gray-700 cursor-pointer">
              <td className="px-4 py-3 text-sm border">{d}</td>
              <td className="px-4 py-3 text-sm border">{item.title}</td>
              <td className="px-4 py-3 text-sm border space-x-1">
                {item.specializations.map((special) => {
                  return (
                    <span className="font-medium bg-black py-[1px] px-[3px] rounded-[0.25rem] text-white">
                      {special}
                    </span>
                  );
                })}
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">22</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  Acceptable
                </span>
              </td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  Acceptable
                </span>
              </td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  Acceptable
                </span>
              </td>
            </tr>
          );
        })}
    </>
  );
}

function RecordsTable({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="w-full my-8 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full ">
          <thead>
            <tr className="text-md  tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-4 py-3">Date Added</th>
              <th className="px-4 py-3">Protocol No.</th>
              <th className="px-4 py-3">Submitted by</th>
              <th className="px-4 py-3">Investigator</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Note</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            <Items currentItems={currentItems} />
            <div className="absolute w-full right-0">
              <ReactPaginate
                className="flex justify-end mx-4 my-4 md:my-10 items-center select-none"
                activeLinkClassName="border-[0.5px] py-2 px-4 bg-[#3c97fe] rounded-[0.25rem] cursor-pointer text-white font-bold"
                previousLinkClassName="border-[0.5px] py-[0.55rem] px-4 bg-white rounded-[0.25rem] cursor-pointer "
                nextLinkClassName="border-[0.5px] py-[0.55rem] px-4 bg-white rounded-[0.25rem] cursor-pointer "
                pageLinkClassName="border-[0.5px] py-2 px-4 bg-white rounded-[0.25rem] cursor-pointer "
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecordsTable;
