import { PluginOptions, ProcessedPluginOptions } from "../../shared/interfaces";
import { processPluginOptions } from "./processPluginOptions";

describe("processPluginOptions", () => {
  const siteDir = "/tmp";

  test.each<[PluginOptions, Partial<ProcessedPluginOptions>]>([
    [
      {
        docsRouteBasePath: "docs",
        blogRouteBasePath: "/blog",
        docsDir: "docs",
        blogDir: "blog",
        language: "en",
        ignoreFiles: "test",
        searchBarPosition: "auto",
      },
      {
        docsRouteBasePath: ["docs"],
        blogRouteBasePath: ["blog"],
        blogDir: ["/tmp/blog"],
        docsDir: ["/tmp/docs"],
        language: ["en"],
        ignoreFiles: ["test"],
        searchBarPosition: "right",
      },
    ],
    [
      {
        docsRouteBasePath: ["docs"],
        blogRouteBasePath: ["/blog"],
        docsDir: "docs",
        blogDir: "blog",
        language: ["en", "zh"],
        ignoreFiles: [/__meta__$/],
        searchBarPosition: "left",
      },
      {
        docsRouteBasePath: ["docs"],
        blogRouteBasePath: ["blog"],
        blogDir: ["/tmp/blog"],
        docsDir: ["/tmp/docs"],
        language: ["en", "zh"],
        ignoreFiles: [/__meta__$/],
        searchBarPosition: "left",
      },
    ],
  ])("processPluginOptions(...) should work", (options, config) => {
    expect(
      processPluginOptions(options, {
        siteDir,
        siteConfig: {
          themeConfig: {},
        },
      })
    ).toEqual(config);
  });

  test("detect search bar position", () => {
    expect(
      processPluginOptions(
        {
          docsRouteBasePath: "docs",
          blogRouteBasePath: "/blog",
          docsDir: "docs",
          blogDir: "blog",
          language: "en",
          ignoreFiles: "test",
          searchBarPosition: "auto",
        },
        {
          siteDir,
          siteConfig: {
            themeConfig: {
              navbar: {
                items: [
                  {
                    type: "doc",
                    position: "right",
                  },
                  {
                    type: "search",
                    position: "left",
                  },
                ],
              },
            },
          },
        }
      )
    ).toEqual({
      docsRouteBasePath: ["docs"],
      blogRouteBasePath: ["blog"],
      blogDir: ["/tmp/blog"],
      docsDir: ["/tmp/docs"],
      language: ["en"],
      ignoreFiles: ["test"],
      searchBarPosition: "left",
    });
  });
});
