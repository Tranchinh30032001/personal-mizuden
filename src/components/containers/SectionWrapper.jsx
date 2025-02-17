import Title from '../ui/Title/Title'

/**
 * SectionWrapper component that wraps its children with a section element.
 * It also includes a Title component to display the provided label.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label to be displayed in the Title component.
 * @param {React.ReactNode} props.children - The child elements to be wrapped by the section.
 */
const SectionWrapper = ({ label, children }) => {
  return (
    <section className='last:mb-0 mb-3'>
      <Title>{label}</Title>
      <div className='ml-4  mt-2 space-y-2'>{children}</div>
    </section>
  )
}

export default SectionWrapper
