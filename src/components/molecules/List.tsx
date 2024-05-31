import { FC, ReactNode } from "react";

interface Props<T> {
  data: T[];
  renderItem: (item: T) => ReactNode;
}

export default function List<T>({ data, renderItem }: Props<T>) {
  return <>{data.map(renderItem)}</>;
}
