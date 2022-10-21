import React from 'react';
import OnePersonCircle from '../../components/OnePersonCircle';
import {View, Dimensions, Image, Text} from 'react-native';

const ListPeople = ({peopleInfo, searchUser}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#0D164B',
        borderRadius: Dimensions.get('window').width - 100,
        height: 375,
        marginTop: 10,
      }}>
      <View
        style={{
          borderColor: '#0D164B',
          borderWidth: 1,
          width: 285,
          height: 285,
          borderRadius: 285 / 2,
          alignSelf: 'center',
          marginTop: '10%',
        }}>
        <View
          style={{
            borderColor: '#0D164B',
            borderWidth: 1,
            width: 185,
            height: 185,
            borderRadius: 185 / 2,
            alignSelf: 'center',
            marginTop: '15%',
          }}>
          <OnePersonCircle
            viewStyle={{
              marginTop: -60,
              alignSelf: 'center',
              width: 100,
              alignItems: 'center',
            }}
            imageSource={peopleInfo[0].image}
            name={peopleInfo[0].name}
          />
          <OnePersonCircle
            viewStyle={{
              marginTop: 30,
              marginLeft: -90,
              width: 100,
              alignItems: 'center',
            }}
            imageSource={peopleInfo[1].image}
            name={peopleInfo[1].name}
          />
          <OnePersonCircle
            viewStyle={{
              alignSelf: 'center',
              width: 100,
              marginTop: 125,
              alignItems: 'center',
            }}
            imageSource={peopleInfo[2].image}
            name={peopleInfo[2].name}
          />
          <OnePersonCircle
            viewStyle={{
              width: 100,
              alignItems: 'center',
              marginLeft: 150,
              marginTop: -120,
            }}
            imageSource={peopleInfo[3].image}
            name={peopleInfo[3].name}
          />
          <OnePersonCircle
            viewStyle={{
              width: 100,
              marginTop: -180,
              marginLeft: 120,
              alignItems: 'center',
            }}
            imageSource={
              searchUser.length !== 0
                ? searchUser[0]?.image
                : peopleInfo[6].image
            }
            name={
              searchUser.length !== 0 ? searchUser[0]?.name : peopleInfo[6].name
            }
            display={
              searchUser.length !== 0 ? 'selectedUserDisplay' : undefined
            }
          />
          <OnePersonCircle
            viewStyle={{
              width: 100,
              top: -20,
              marginLeft: -40,
              alignItems: 'center',
              alignSelf: 'flex-start',
            }}
            imageSource={peopleInfo[5].image}
            name={peopleInfo[5].name}
          />
        </View>
      </View>
    </View>
  );
};

export default ListPeople;
