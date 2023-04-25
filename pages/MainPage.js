import React, { useState, useEffect } from 'react';
import {View, StyleSheet, FlatList } from 'react-native';
import TextItem from '../components/templates/TextItem';
import TextInputWithButton from '../components/TextInputWithButton';
import SearchInputButton from '../components/SearchInputButton';
import DetailItemModal from '../modals/DetailItemModal';

function MainPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [maxId, setMaxId] = useState(0);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({item:{}});
  const [searchQuerty, setSearchQuerty] = useState('');

  function textInputHandler(text) {
    setItems(currentItems => [...currentItems, {text: text, id: maxId}]);
    setMaxId(currentId => currentId + 1);
  }

  function deleteItemHandler(id){
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  }

  function filterHandler(text){
    setSearchQuerty(text);
    setFilteredItems(items.filter(item => item.text.indexOf(text) !== -1));
  }

  function showItemHandler(item){
    setCurrentItem(item);
    setIsShowDetailModal(true);
  }

  function closeDetailModalHandler(){
    setIsShowDetailModal(false);
  }

  useEffect(() => {
    filterHandler(searchQuerty);
  }, [items]);

  return (
    <View style={styles.container}>
      <DetailItemModal visible={isShowDetailModal} item={currentItem} onClose={closeDetailModalHandler}/>

      <TextInputWithButton
        isClear={true}
        textButton='Add'
        style={styles.textInput}
        onTextChanged={textInputHandler}/>

      <SearchInputButton
        textButton='Search'
        style={styles.textInput}
        onTextChanged={filterHandler}/>

      <FlatList
        data={filteredItems}
        renderItem={item => {
          return (
            <TextItem
              key={item.index}
              item={item.item}
              onPress={showItemHandler.bind(this, item)}
              onDelete={deleteItemHandler.bind(this, item.item.id)}/>
          );
        }}
        keyExtractor={(item, index) => {
          return index;
        }}
        style={styles.scrollContainer}
        alwaysBounceVertical={false}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#130ea5',
  },
  textInput: {
    borderRadius: 6,
    overflow: 'hidden',
    margin: 8,
  },
  scrollContainer: {
    width: '100%',
  },
});

export default MainPage;