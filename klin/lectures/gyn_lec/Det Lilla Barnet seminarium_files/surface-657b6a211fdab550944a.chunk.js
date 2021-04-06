  mutation($wallId: ID!) {
    deleteWall(id: $wallId) {
      id
    }
  }
`,a=o.a`
  mutation($wallId: ID!) {
    archiveWall(id: $wallId) {
      id
    }
  }
`,s=o.a`
  mutation($wallId: ID!) {
    unarchiveWall(id: $wallId) {
      id
    }
  }
`,c=o.a`
  query(
    $userId: Int!
    $wallsFilter: WallsFilter
    $folderId: Int
    $afterCursor: String
    $loadCount: Int
    $shouldFetchLinks: Boolean!
  ) {
    user(id: $userId) {
      id
      name
      walls(filter: $wallsFilter, folder_id: $folderId, after: $afterCursor, first: $loadCount) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            title
            public_tag_list
            updated_at
            archived_at
            address
            viz
            background {
              fill
              url
              dominant_color
            }
            links @include(if: $shouldFetchLinks) {
              permanent
            }
            builder {
              id
              avatar
              username
              display_name
            }
          }
        }
      }
    }
  }
//# sourceMappingURL=surface-657b6a211fdab550944a.chunk.js.map