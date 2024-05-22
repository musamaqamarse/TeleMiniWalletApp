import { Tab, Tabs } from 'react-bootstrap';

function TabsRow() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 nav justify-content-center" style={{ fontSize: '0.6em' }}>
            <Tab eventKey="home" title="Tokens" style={{ padding: '10px' }}>
                Token content
            </Tab>
            <Tab eventKey="profile" title="NFTs" style={{ padding: '10px' }}>
                NFTs content
            </Tab>
            <Tab eventKey="messages" title="Activity" style={{ padding: '10px' }}>
                Activity content
            </Tab>
        </Tabs>
    );
}

export default TabsRow;