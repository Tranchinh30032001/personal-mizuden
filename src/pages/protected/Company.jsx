import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const Company = () => {
  const context = useOutletContext()

  useEffect(() => {
    if (context?.onLoaded) {
      console.log('✅ Gọi onLoaded() trong Company')
      context.onLoaded(<Company />) // Truyền JSX thực tế thay vì <Company />
    }
  }, [])

  return <div>Company</div>
}

export default Company
