import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Appbar, DataTable, useTheme } from "react-native-paper";

const optionsPerPage = [2, 3, 4];

const ShopDetails = () => {
  const route = useRoute();
  const { shop } = route.params;
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={shop.name + "  shop details"} />
      </Appbar>
      <DataTable
        style={{
          backgroundColor: colors.accent,
          flex: 0.5,
        }}
      >
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Contacts</DataTable.Title>
          <DataTable.Title numeric>Services</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell> {shop.name} </DataTable.Cell>
          <DataTable.Cell numeric>{shop.phoneNumber}</DataTable.Cell>
          <DataTable.Cell>
            {
              // break where there is a comma in the string
              shop.services.split(",").join("\n")
            }
          </DataTable.Cell>
        </DataTable.Row>

        {/* <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={"Rows per page"}
        /> */}
      </DataTable>
    </SafeAreaView>
  );
};

export default ShopDetails;

const styles = StyleSheet.create({});
