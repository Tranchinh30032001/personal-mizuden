import HouseInfo from '@/components/shared/HouseInfo'
import Button from '@/components/ui/Button/Button'

const HouseSpecSection = () => {
  return (
    <section className='overflow-hidden'>
      <HouseInfo label='ハウス情報1' />
      <HouseInfo label='ハウス情報2' />
      <div className='flex items-center gap-2'>
        <Button label='ハウス情報追加' className='!btn-sm w-40' />
        <Button label='ハウス情報削除' className='!btn-sm w-40' />
      </div>
    </section>
  )
}

export default HouseSpecSection
