import React from "react";
import {Card, Header, Image, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import testLogo from "../../images/pc.png";


const Dashboard = () => (
    <div>
        <Header as='h1' textAlign='center'>
            Recent devices
        </Header>
        <Card.Group centered>
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={testLogo}/>
                    <Card.Header>
                        Customer hub 1
                    </Card.Header>
                    <Card.Meta>
                        Belongs to Aiotex
                    </Card.Meta>
                    <Card.Description>
                        <p><strong>CPU: </strong>30%</p>
                        <p><strong>Memory free: </strong>1020/2048</p>
                        <p><strong>Disk usage:</strong>45%</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui bottom attached center aligned'>
                        <Button basic color='green' as={Link} to="/hub">Monitor</Button>
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={testLogo}/>
                    <Card.Header>
                        Customer hub 2
                    </Card.Header>
                    <Card.Meta>
                        Belongs to Leibur
                    </Card.Meta>
                    <Card.Description>
                        <p><strong>CPU: </strong>20%</p>
                        <p><strong>Memory free: </strong>1220/2048</p>
                        <p><strong>Disk usage:</strong>65%</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui bottom attached center aligned'>
                        <Button basic color='green' as={Link} to="/hub">Monitor</Button>
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={testLogo}/>
                    <Card.Header>
                        Aiotex Hub 1
                    </Card.Header>
                    <Card.Meta>
                        Belongs to Aiotex
                    </Card.Meta>
                    <Card.Description>
                        <p><strong>CPU: </strong>12%</p>
                        <p><strong>Memory free: </strong>450/2048</p>
                        <p><strong>Disk usage:</strong>13%</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui bottom attached center aligned'>
                        <Button basic color='green' as={Link} to="/hub">Monitor</Button>
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={testLogo}/>
                    <Card.Header>
                        Aiotex Hub 2
                    </Card.Header>
                    <Card.Meta>
                        Belongs to Aiotex
                    </Card.Meta>
                    <Card.Description>
                        <p><strong>CPU: </strong>90%</p>
                        <p><strong>Memory free: </strong>2012/2048</p>
                        <p><strong>Disk usage:</strong>100%</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui bottom attached center aligned'>
                        <Button basic color='green' as={Link} to="/hub">Monitor</Button>
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={testLogo}/>
                    <Card.Header>
                        Aiotex Hub 3
                    </Card.Header>
                    <Card.Meta>
                        Belongs to Aiotex
                    </Card.Meta>
                    <Card.Description>
                        <p><strong>CPU: </strong>30%</p>
                        <p><strong>Memory free: </strong>1020/2048</p>
                        <p><strong>Disk usage:</strong>45%</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui bottom attached center aligned'>
                        <Button basic color='green' as={Link} to="/hub">Monitor</Button>
                    </div>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Image floated='right' size='mini' src={testLogo}/>
                    <Card.Header>
                        Aiotex Hub 4
                    </Card.Header>
                    <Card.Meta>
                        Belongs to Leibur
                    </Card.Meta>
                    <Card.Description>
                        <p><strong>CPU: </strong>10%</p>
                        <p><strong>Memory free: </strong>1020/2048</p>
                        <p><strong>Disk usage:</strong>45%</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui bottom attached center aligned'>
                        <Button basic color='green' as={Link} to="/hub">Monitor</Button>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    </div>

);

export default Dashboard;