/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
      'intro',
      {
        type: 'category',
        label: 'Developers',
        collapsed: true,
        items: [
            'developers/overview',
            {
                Modules: {
                    Profiles: [
                        'developers/modules/profiles/overview',
                        'developers/modules/profiles/concepts',
                        'developers/modules/profiles/state',
                        'developers/modules/profiles/messages',
                        'developers/modules/profiles/events',
                        'developers/modules/profiles/params',
                        'developers/modules/profiles/client'
                    ],
                    Relationships:[
                        'developers/modules/relationships/overview',
                        'developers/modules/relationships/concepts',
                        'developers/modules/relationships/state',
                        'developers/modules/relationships/messages',
                        'developers/modules/relationships/events',
                        'developers/modules/relationships/client'
                    ],
                    Subspaces:[
                        'developers/modules/subspaces/overview',
                        'developers/modules/subspaces/concepts',
                        'developers/modules/subspaces/state',
                        'developers/modules/subspaces/messages',
                        'developers/modules/subspaces/events',
                        'developers/modules/subspaces/permissions',
                        'developers/modules/subspaces/client'
                    ],
                    Posts:[
                        'developers/modules/posts/overview',
                        'developers/modules/posts/concepts',
                        'developers/modules/posts/state',
                        'developers/modules/posts/messages',
                        'developers/modules/posts/events',
                        'developers/modules/posts/permissions',
                        'developers/modules/posts/params',
                        'developers/modules/posts/client'
                    ],
                    Reactions:[
                        'developers/modules/reactions/overview',
                        'developers/modules/reactions/concepts',
                        'developers/modules/reactions/state',
                        'developers/modules/reactions/messages',
                        'developers/modules/reactions/events',
                        'developers/modules/reactions/permissions',
                        'developers/modules/reactions/client'
                    ],
                    Reports:[
                        'developers/modules/reports/overview',
                        'developers/modules/reports/concepts',
                        'developers/modules/reports/state',
                        'developers/modules/reports/messages',
                        'developers/modules/reports/events',
                        'developers/modules/reports/permissions',
                        'developers/modules/reports/params',
                        'developers/modules/reports/client'
                    ],
                    Fees:[
                       'developers/modules/fees/overview',
                       'developers/modules/fees/concepts',
                       'developers/modules/fees/state',
                       'developers/modules/fees/ante-handlers',
                       'developers/modules/fees/params',
                       'developers/modules/fees/client'
                    ],
                    Supply:[
                       'developers/modules/supply/overview',
                       'developers/modules/supply/concepts',
                       'developers/modules/supply/client'
                    ]
                }
            },
            'developers/tools-to-build',
            'developers/query-data',
            'developers/observe-data',
            'developers/faq',
        ]
      },
      {
          type: 'category',
          label: 'Running a Fullnode',
          collapsed: true,
          items: [
              'fullnode/overview',
              'fullnode/setup',
              'fullnode/cosmovisor',
              'fullnode/update',
              'fullnode/reset-data',
              'fullnode/rocksdb-installation'
          ]
      },
      {
          type: 'category',
          label: 'Validators',
          collapsed: true,
          items: [
              'validators/overview',
              'validators/setup',
              'validators/halting',
              'validators/migrating',
              'validators/common-problems',
              'validators/faq'
          ]
      },
      {
          type: 'category',
          label: 'Testnet',
          collapsed: true,
          items: [
              'testnet/overview',
              'testnet/create-local',
              {
                  'Join the public testnet': [
                      'testnet/join-public/setup',
                      'testnet/join-public/genesis-file',
                      'testnet/join-public/seeds',
                      'testnet/join-public/state-sync',
                      'testnet/join-public/full-sync',
                  ],
              },
              'testnet/endpoints'
          ]
      },
      {
          type: 'category',
          label: 'Mainnet',
          collapsed: true,
          items: [
            'mainnet/genesis-file',
            'mainnet/seeds',
            'mainnet/state-sync',
            'mainnet/full-sync',
            'mainnet/security',
            'mainnet/endpoints'
          ]
      },
      {
          type: "category",
          label: 'GraphQL Schemas',
          collapsed: true,
          items: [
              {
                  type: "autogenerated",
                  dirName: "07-graphql"
              }
          ]
      }
  ],
};
