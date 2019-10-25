import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking, FlatList } from 'react-native'
import image from '../../assets/img/t1.png'
import PageLayout from '../../components/UI/PageLayout'
import moment from 'moment'

const NewsDetails = (props) => {
  const data = props.navigation.getParam('passedItem', {})
  return (
    <PageLayout style={{ backgroundColor: '#f4f4f4', flex: 1 }}>
      <ScrollView>
        <Image resizeMode="contain" style={{ height: 250, width: '100%' }} source={data.imageLoading ? null : (data.image && data.imageError === false) ? { uri: 'data:image/jpeg;base64, ' + data.image } : image}></Image>
        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', minHeight: 300, padding: 10 }}>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <Text style={{
              fontSize: 26,
              fontWeight: '500',
              textAlign: 'center'
            }}>
              {data.Title || 'без назви'}
            </Text>
          </View>
          <View>
            <Text style={{
              fontSize: 16
            }}>
              {data.Text}
            </Text>
          </View>
          <View>
            <Text style={{
                fontSize: 20,
                fontWeight: '500',
                textAlign: 'left'
              }}>
                {data.Urls == undefined || data.Urls.length == 0 ? '' : 'Посилання'}
            </Text>
            <View>
              <FlatList data = {data.Urls} renderItem = {({item}) => <TouchableOpacity onPress={() => Linking.openURL(item.Path)}><Text style={{fontSize: 18, textDecorationLine: 'underline'}}>{item.Title || ''}</Text></TouchableOpacity>} keyExtractor={(item, index) => index.toString()}
              />
            </View>
              
            
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
            <Text style={{
              color: '#444'
            }}>
              {data.Author || 'Невідомий автор'}
            </Text>
            <Text style={{
              color: '#444'
            }}>
              {moment(data.Date).format('DD-MM-YYYY')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </PageLayout>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleBlock: {
    width: '35%'
  },
  value: {
    fontSize: 14
  },
  valueBlock: {
    width: '65%'
  },
  rowView: {
    flexDirection: 'row',
    margin: 5
  }
})

export default NewsDetails
