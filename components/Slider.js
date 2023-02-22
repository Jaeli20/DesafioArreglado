import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  
  slide: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: { width: windowWidth * 0.7, height: windowHeight * 0.2 },
  slideTitle: { fontSize: 24 },
  slideSubtitle: { fontSize: 18 },

  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: "lightblue" },
  paginationDotInactive: { backgroundColor: "gray" },

  carousel: { flex: 1 },
});

const slideList = Array.from({ length: 1 }).map((_, i) => {
  return {
    name: 'LO MAS NUEVO',
    id: i,
    image: `data:image/jpeg;base64,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`,
    title: `PlayStation 5`,
    subtitle: `Es la quinta consola de videojuegos de sobremesa desarrollada por la empresa Sony Interactive Entertainment. Fue anunciada en el año 2019 como la sucesora de la PlayStation 4, la PS5 se lanzó el 12 de noviembre de 2020 en Australia, Japón, Nueva Zelanda, América del Norte, Singapur y Corea del Sur, y en el resto de países el 19 de noviembre de 2020. La PlayStation 5 junto con la Xbox Series X|S de Microsoft, lanzada el mismo mes, son parte de la novena generación de consolas de videojuegos.`,
  }
});

const Slide = memo(function Slide({ data }) {
  return (
    <View style={styles.slide}>
      <Text style={styles.slideTitle}>{data.name}</Text>
      <Image source={{ uri: data.image }} style={styles.slideImage}></Image>
      <Text style={styles.slideTitle}>{data.title}</Text>
      <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
    </View>
  );
});

function Pagination({ index }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>
    </>
  );
}
