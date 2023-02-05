import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { GetLangData, navigateTo, RemoveData, resetStack } from '../../utils/commonFun';
import { SCREEN1 } from '../../route';

function Screen2(props: any) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = GetLangData();
    i18n.changeLanguage(lang.data)

    // Use `setOptions` to delete the user data and navigate again to login page.
    props.navigation.setOptions({
      title: t("homeTitle"),
      headerLeft: () => (
        <Icon name='language' type='font-awesome' color="rgb(158,198,116)"
          onPress={() => { navigateTo(props, 'LanguageSelection'); }} />
      ),
      headerRight: () => (
        <Icon name='logout-variant' type='material-community' color="rgb(158,198,116)"
          onPress={() => { RemoveData(); resetStack(props, SCREEN1); }} />
      )
    });

  }, [props]);




  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      {/* <Button title="Hey!" /> */}
      <Icon
        name='camera'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Screen2;
