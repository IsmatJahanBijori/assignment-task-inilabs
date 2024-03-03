import React from 'react'
import Text from '../../../components/Text'
import Container from "../../../components/Container"

const WorkingEnvironment = () => {
    return (
        <Container className=" w-[1140px] mt-[92px]">
            <section className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <Text title={"Work together, wherever you work"} paragraph={"In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."} />
                </div>
                <img src="https://i.ibb.co/wRxf9ty/hybridwork-png.png" alt="" />
            </section>
        </Container>
    )
}

export default WorkingEnvironment