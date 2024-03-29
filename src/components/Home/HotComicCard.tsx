/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {HotComicItem} from '../../types';
import {color, font} from '../../theme';
import {StarIcon} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: HotComicItem;
}

export default function HotComicCard({item}: Props) {
  const navigate = useNavigation<any>();

  return (
    <Pressable
      onPress={() =>
        navigate.navigate('ComicDetail', {
          slug: item.slug,
        })
      }
      className="mx-2 rounded-lg my-2 overflow-hidden"
      style={{
        backgroundColor: color['gray-2'],
        elevation: 3,
        shadowColor: color['gray-3'],
      }}>
      <Image
        source={
          item.coverImg === '' ||
          item.coverImg === null ||
          item.coverImg === undefined
            ? require('../../assets/img/bochi-no-img.webp')
            : {
                uri: item.coverImg,
              }
        }
        style={{width: 200, height: 150, backgroundColor: color['gray-2']}}
      />
      <Text
        className="absolute top-2 right-2 px-2 py-1 rounded-md text-xs"
        style={{
          backgroundColor:
            item.type === 'Manga'
              ? color.mangaType
              : item.type === 'Manhua'
              ? color.manhuaType
              : color.manhwaType,
          color: color.text,
          ...font.medium,
        }}>
        {item.type}
      </Text>
      <View className="mb-2.5">
        <Text
          className="max-w-[200px] text-[15px] p-2"
          style={{color: color.text, ...font.semibold}}
          numberOfLines={1}>
          {item.title}
        </Text>
        <View className="flex-row justify-between items-center mx-2">
          <Text
            className="px-2 py-1 rounded-md text-xs"
            style={{
              color: color.text,
              backgroundColor: color['gray-4'],
              ...font.semibold,
            }}>
            Ch. {item.latestChapter}
          </Text>
          <View className="flex-row items-center space-x-1.5">
            <StarIcon color={color.star} fill={color.star} size={16} />
            <Text style={{color: color.text, ...font.semibold}}>
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
