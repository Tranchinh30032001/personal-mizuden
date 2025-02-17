import { cn } from '@/utils/cn'
import PropTypes from 'prop-types'
import { useState, useEffect, useMemo } from 'react'
import { RiContractLeftLine } from 'react-icons/ri'
import { RiContractRightLine } from 'react-icons/ri'

const threeDots = '...'
function Pagination({ totalData, itemPerPage, currentPage, setCurrentPage }) {
  const totalPage = useMemo(() => Math.ceil(totalData / itemPerPage))

  const [currentButton, setCurrentButton] = useState(1)
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

  const pageList = Array.from({ length: totalPage }, (_, i) => i + 1)

  /* handle page list display with conditions */
  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons]
    const lastPageNumber = pageList.length
    if (pageList.length < 6) {
      tempNumberOfPages = pageList
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, threeDots, lastPageNumber]
    } else if (currentButton === 4 && pageList.length > 6) {
      const sliced = pageList.slice(1, 5)
      tempNumberOfPages = [...sliced, threeDots, lastPageNumber]
    } else if (currentButton > 4 && currentButton < pageList.length - 1) {
      const sliced1 = pageList.slice(currentButton - 2, currentButton)
      const sliced2 = pageList.slice(currentButton, currentButton + 1)
      tempNumberOfPages = [1, threeDots, ...sliced1, ...sliced2, threeDots, lastPageNumber]
    } else if (currentButton > pageList.length - 3) {
      const sliced = pageList.slice(pageList.length - 4)
      tempNumberOfPages = [1, threeDots, ...sliced]
    } else if (currentButton === threeDots) {
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
    }

    setArrOfCurrButtons(tempNumberOfPages)
    setCurrentPage(currentPage)
  }, [currentButton, totalPage])

  useEffect(() => setCurrentButton(currentPage), [currentPage])

  const isNotFirstPage = currentPage > 1 && arrOfCurrButtons.length > 5
  const isNotLastPage = currentPage < totalPage && arrOfCurrButtons.length > 5

  const beginIndex = 1 + (itemPerPage * (currentPage - 1))
  const endIndex = Math.min(itemPerPage * currentPage, totalData)

  return (
    <section className='relative text-sm'>
      <div className='flex items-center justify-center font-medium space-x-1'>
        {isNotFirstPage && <FirstPageRedirectBtn goFirstPage={() => setCurrentPage(1)} />}
        {arrOfCurrButtons.map((item, index) => (
          <span
            key={index}
            className={cn(
              'flex items-center justify-center text-gray-primary size-10 decoration-[0] transition-colors duration-200 border border-solid border-gray-border-primary cursor-pointer rounded-sm select-none',
              {
                'bg-blue-secondary !text-white border border-solid border-blue-secondary rounded':
                  currentButton === item
              },
              { 'cursor-default border-none': item === threeDots }
            )}
            onClick={() => (item !== threeDots ? setCurrentPage(item) : null)}
          >
            {item}
          </span>
        ))}
        {isNotLastPage && <LastPageRedirectBtn goLastPage={() => setCurrentPage(totalPage)} />}
      </div>

      <div className='absolute right-0 top-1/2 -translate-y-1/2'>{beginIndex} - {endIndex} / {totalData} 件</div>
    </section>
  )
}

Pagination.propTypes = {
  totalData: PropTypes.number.isRequired, // Total data
  itemPerPage: PropTypes.number.isRequired, // Total item per page
  setCurrentPage: PropTypes.func.isRequired, // Function to set the current page
  currentPage: PropTypes.number.isRequired // Current active page number
}

export default Pagination

const containerButton =
  'border-[1px] mr-1 size-10 flex justify-center items-center cursor-pointer border-gray-border-primary rounded-sm select-none'

function FirstPageRedirectBtn({ goFirstPage }) {
  return (
    <div className={containerButton} onClick={goFirstPage}>
      <RiContractLeftLine size={20} />
    </div>
  )
}

function LastPageRedirectBtn({ goLastPage }) {
  return (
    <div className={containerButton} onClick={goLastPage}>
      <RiContractRightLine size={20} />
    </div>
  )
}
