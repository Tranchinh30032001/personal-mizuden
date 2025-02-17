import ContentContainer from '@/components/containers/ContentContainer'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import WorkTable1 from './components/WorkTable1'
import WorkTable2 from './components/WorkTable2'
import QuickAccesses from './components/QuickAccesses'

const Portal = () => {
  return (
    <>
      <Breadcrumbs crumbs={[{ to: '/portal', title: 'ポータル' }]} />
      <ContentContainer className='space-y-8'>
        <WorkTable1 />
        <WorkTable2 />
        <QuickAccesses />
      </ContentContainer>
    </>
  )
}

export default Portal
