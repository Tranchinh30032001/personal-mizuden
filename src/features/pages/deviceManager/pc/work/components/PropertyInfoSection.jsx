import SectionWrapper from '@/components/containers/SectionWrapper'
import AddressPostCode from '@/components/shared/AddressPostCode'
import Input from '@/components/ui/Input/Input'
import InputButton from '@/components/ui/Input/InputButton'
import Select from '@/components/ui/Select/Select'

export const OFFICE_ADDRESSES = [{ value: 0, label: '岡山' }]
export const SALE_REPRESENTS = [{ value: 0, label: '営業  太郎' }]

const PropertyInfoSection = () => {
  return (
    <section>
      <SectionWrapper label='案件状況'>
        <Select
          name='status'
          options={[
            { value: 0, label: '仮登録' },
            { value: 1, label: '仮登録1' }
          ]}
          className='w-40'
        />
      </SectionWrapper>

      <SectionWrapper label='案件状況'>
        <Select
          label='営業所'
          name='saleOfficeAddress'
          options={OFFICE_ADDRESSES}
          className='w-40'
        />
        <Select label='営業担当者' name='saleRepresent' options={SALE_REPRESENTS} />
        <Input label='案件番号' name='phoneNumber' placeholder='042024080001' />
        <Input label='案件名 （現場名）' name='projectName' placeholder='ナカシマ中央病院' />
        <InputButton label='得意先' name='111' />
        <InputButton label='支店名' name='222' />
        <InputButton label='得意先 担当者' name='333' />
        <InputButton
          label='得意先 連絡先'
          name='customerContact'
          placeholder='090-1111-2222'
          isButton={false}
        />
        <AddressPostCode label='現場住所' nameAddress='address' nameZip='zip' />
        <Select
          label='エリア'
          name='saleOfficeAddress'
          options={OFFICE_ADDRESSES}
          className='w-40'
        />
      </SectionWrapper>
    </section>
  )
}

export default PropertyInfoSection
