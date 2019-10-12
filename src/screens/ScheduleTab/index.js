import React from 'react'
import { Button, Text } from 'react-native'

class ScheduleTab extends React.Component {
    static navigationOptions = {
        title: 'Розклад',
    };
    render() {
        const {navigation} = this.props;
        return (<>
            <Button
                title="Go to profile"
                onPress={() => navigation.navigate('ProfileTab', {name: 'from schedule'})}
            />
            <Text>
                name: {navigation.getParam('name', 'NO-ID')}
            </Text>
            </>
        );
    }
}
export default ScheduleTab
