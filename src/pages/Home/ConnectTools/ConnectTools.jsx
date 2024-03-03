import React from 'react'
import Container from '../../../components/Container'
import Text from "../../../components/Text"
const ConnectTools = () => {

    return (
        <Container className=" w-[1140px] mt-[120px]">
            <section className='grid grid-cols-1 md:grid-cols-2'>
                <img src="https://i.ibb.co/xGy3C29/M3-integrations-all-integrations-png.png" alt="M3-integrations-all-integrations-png" />
                <div className='flex justify-center items-center'>
                    <Text title={"Connect your tools, close your tabs"} paragraph={"Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love."} />
                </div>
            </section>
        </Container>
    )
}

export default ConnectTools