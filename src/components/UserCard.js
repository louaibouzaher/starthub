const UserCard = ({user}) => {
    return (
        <div className='flex flex-row w-full items-center py-2  max-w-max rounded-lg'>
        <Link href={`/profile/${user.id}`} passHref>
          <UserAvatar link={user.avatar || user.picture} size={'16'} />
        </Link>
        <div className="ml-4 flex flex-col items-start">
          <Link href={`/profile/${user.id}`} passHref>
            <div className='hover:text-purple cursor-pointer font-bold '>
              {' '}
              {user.firstName} {user.lastName}
            </div>
          </Link>
          <div className='text-xs opacity-50 '>
            time
          </div>
        </div>
        {(
          <Button
            label={'Follow'}
            btnStyle={
              'border-2 border-green text-green text-sm ml-6 hover:bg-green hover:text-white max-h-10 '
            }
          />
        )}
      </div>
    )
  }
  
export default UserCard
