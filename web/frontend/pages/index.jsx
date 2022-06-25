import { TitleBar, useToast, Toast } from "@shopify/app-bridge-react";
import {
  Card, Layout, Page, Stack, Button
} from "@shopify/polaris";


import { ProductsCard } from "../components";

export default function HomePage() {
  const { show } = useToast()
  const primaryAction = { content: 'Foo', url: '/foo' };
  const secondaryActions = [{ content: 'Bar', url: '/bar', loading: false }];
  const actionGroups = [{ title: 'Baz', actions: [{ content: 'Baz', url: '/baz' }] }];

  return (
   <h1>Hello world</h1>
  );
}
