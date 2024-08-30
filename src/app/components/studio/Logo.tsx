import Image from 'next/image'
function Logo(props: any) {
    const { renderDefault, title } = props
    return (
        <div className='flex items-center space-x-2'>
            <Image
                className='rounded-full'
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.7boats.com%2Fblogging-guide%2F&psig=AOvVaw0Cy9ePbwT7ZVzGsvNvDZtT&ust=1724758987061000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODF04fKkogDFQAAAAAdAAAAABAK"
                height={50}
                width={50}
                alt="LOGO"
            />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo
