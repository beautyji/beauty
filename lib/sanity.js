import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent,
  } from "next-sanity";
  
  const config = {
    projectId: "g84r240b",
    dataset: "production",
    apiVersion: "2022-03-02",
    useCdn: true,
  };
  
  export const sanityClient = createClient(config);
  
  export const usePreviewSubscription = createPreviewSubscriptionHook(config);
  
  export const urlFor = (source) => createImageUrlBuilder(config).image(source);
  
  export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
  });