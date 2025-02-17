import DetailPanel from '@/components/shared/DetailPanel'
import Button from '@/components/ui/Button/Button'

export default {
  title: 'Components/DetailPanel',
  component: DetailPanel,
  argTypes: {
    title: { control: 'text' },
    expandable: { control: 'boolean' }
  }
}

const Template = (args) => <DetailPanel {...args} />

export const Default = Template.bind({})
Default.args = {
  title: '案件情報',
  rows: [
    { label: '案件番号', value: '042024080001' },
    { label: '案件名（現場名）', value: 'ナカシマ中央病院' },
    { label: '営業所', value: '岡山' },
    { label: '担当営業', value: '営業 太郎' },
    { label: '得意先', value: '○○組' },
    { label: '得意先 担当者', value: 'ツルガ' },
    { label: '得意先 連作先', value: '090-1111-2222' },
    {
      label: '現場住所',
      value: ['700-0826', '岡山県岡山市中島田町2-3-19', '中央病院', '2F']
    }
  ]
}

export const WithActions = Template.bind({})
WithActions.args = {
  ...Default.args,
  actions: (
    <>
      <Button label='案件選択' onClick={() => alert('案件選択 clicked')} className='w-36' />
      <Button label='出張修理選択' onClick={() => alert('出張修理選択 clicked')} className='w-36' />
    </>
  )
}

export const Expandable = Template.bind({})
Expandable.args = {
  ...Default.args,
  expandable: true
}
