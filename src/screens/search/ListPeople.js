import React from 'react';
import OnePersonCircle from '../../components/OnePersonCircle';
import {View, Dimensions} from 'react-native';
import ListPeopleStyles from './ListPeopleStyles';

const ListPeople = ({peopleInfo, searchUser}) => {
  return (
    <View
      style={[
        ListPeopleStyles.outerCircle,
        {borderRadius: Dimensions.get('window').width - 100},
      ]}>
      <View style={ListPeopleStyles.middleCircle}>
        <View style={ListPeopleStyles.innerCircle}>
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

export default React.memo(ListPeople);
