import Icon from '../Icon/Icon'

const SlideInPanel = ({children, handleClose}) => {
  return (
    <div className='inset-0 w-full h-screen overflow-y-scroll bg-spanishGreen dark:bg-blueZodiac px-[145px] pt-[100px]'>
      <button onClick={handleClose} className="text-black dark:text-silverLakeBlue absolute right-8 top-6">
        <Icon id="close" size={64} />
      </button>
      {children}
    </div>
  )
}

export default SlideInPanel
