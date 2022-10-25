import icons from "../../../assets/img/icons";
import { LIST } from "../../../services/mocks/List";
import { ItemList } from "./@types";
import * as S from "./TableStyled";

interface IColumns {
  header: string;
  headerIcon?: string;
  accessorKey: string;
}

const columns: IColumns[] = [
  {
    header: "#",
    accessorKey: "id",
  },
  {
    header: "status",
    headerIcon: icons.cube,
    accessorKey: "icon",
  },
  {
    header: "NAME",
    accessorKey: "name",
  },
  {
    header: "TOTAL",
    accessorKey: "total",
  },
  {
    header: "BALANCE",
    accessorKey: "balance",
  },
  {
    header: "ACTIONS",
    accessorKey: "avatar",
  },
];

export const Table = () => {
  const data = LIST;

  return (
    <S.TableContainer>
      <S.TrHead>
        {columns.map((column, index) => (
          <>
            {column.headerIcon ? (
              <S.ThHeader align="center">
                <img src={column.headerIcon} alt={column.header} />
              </S.ThHeader>
            ) : (
              <S.ThHeader align={index === 0 ? "center" : "left"}>
                {column.header}
              </S.ThHeader>
            )}
          </>
        ))}
      </S.TrHead>
      <S.Tbody>
        {data.map((item, i) => {
          return (
            <S.TrBody>
              <S.TdBody>#{item.id}</S.TdBody>
              <S.TdBody>
                <S.Img variant={item.type} src={item.icon} alt="status icon" />
              </S.TdBody>
              <S.CustomTdName>
                <S.UserImg src={item.avatar} alt="user name" />
                <S.ColumnBox>
                  <S.UserName>{item.name}</S.UserName>
                  <S.UserEmail>{item.email}</S.UserEmail>
                </S.ColumnBox>
              </S.CustomTdName>
              <S.TdBody>{item.total}</S.TdBody>
              <S.TdBody>{item.balance}</S.TdBody>
            </S.TrBody>
          );
        })}
      </S.Tbody>
    </S.TableContainer>
  );
};