import SmartLink from '@/components/SmartLink'

export default function LeftMenuBar () {
  return (
    <div className='w-20 hidden lg:block pt-12'>
      <section>
        <SmartLink href='/' legacyBehavior>
          <div className='pill-hover text-center cursor-pointer'>
            <i className='fas fa-home text-gray-500'/>
          </div>
        </SmartLink>
      </section>
    </div>
  );
}
