import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import moment from "moment";

function Items({ currentItems, openTrial }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => {
          return (
            <tr
              className="text-gray-700 cursor-pointer"
              onClick={() => openTrial(item.id)}
              key={item.id}
            >
              <td className="px-4 py-3 text-sm border">
                {moment(new Date(item.created_at))
                  .subtract(10, "days")
                  .calendar()}
              </td>
              <td className="px-4 py-3 text-sm border">{item.title}</td>
              <td className="px-4 py-3 text-sm border space-x-1">
                {item.specializations.map((item) => {
                  return (
                    <span className="font-medium bg-black py-[1px] px-[3px] rounded-[0.25rem] text-white">
                      {item.specialization.name}
                    </span>
                  );
                })}
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">
                {item.applications_count}
              </td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  {" "}
                  Acceptable{" "}
                </span>
              </td>
            </tr>
          );
        })}
    </>
  );
}

function TrialsTable({ itemsPerPage, data }) {
  const history = useHistory();

  const openTrial = (id) => {
    history.push(`/trials/${id}`);
  };
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // const itemsPerPage = 5;

  useEffect(() => {
    // Fetch items from another resources.
    if (data.length > 0) {
      console.log("sulod");
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="w-full my-8 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full ">
          <thead>
            <tr className="text-md  tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-4 py-3">Date Added</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Specializations</th>
              <th className="px-4 py-3">Applications</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            <Items currentItems={currentItems} openTrial={openTrial} />
            <div className="absolute w-full right-0">
              <ReactPaginate
                className="flex justify-end mx-4 my-4 md:my-10 items-center select-none text-xs"
                activeLinkClassName="border-[0.5px] py-2 px-4 bg-[#3c97fe] rounded-[0.25rem] cursor-pointer text-white font-bold"
                previousLinkClassName="border-[0.5px] py-[0.55rem] px-4 bg-white rounded-[0.25rem] cursor-pointer "
                nextLinkClassName="border-[0.5px] py-[0.55rem] px-4 bg-white rounded-[0.25rem] cursor-pointer "
                pageLinkClassName="border-[0.5px] py-2 px-4 bg-white rounded-[0.25rem] cursor-pointer "
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
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

export default TrialsTable;
