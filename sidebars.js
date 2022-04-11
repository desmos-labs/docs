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
                Types: [
                    {
                        Profiles: [
                            'developers/types/profiles/profile',
                            'developers/types/profiles/profile-pictures',
                            'developers/types/profiles/dtag-transfer-request',
                            'developers/types/profiles/application-link',
                            'developers/types/profiles/chain-link'
                        ],
                        Relationships: [
                            'developers/types/relationships/relationship',
                            'developers/types/relationships/user-block',
                        ],
                        Subspaces: [
                            'developers/types/subspaces/subspace',
                            'developers/types/subspaces/user-group',
                            'developers/types/subspaces/permission-detail'
                        ]
                    }
                ],
            },
            {
              Transactions: [
                  {
                    Profiles: [
                        'developers/transactions/profiles/save-profile',
                        'developers/transactions/profiles/delete-profile',
                        'developers/transactions/profiles/request-dtag-transfer',
                        'developers/transactions/profiles/accept-dtag-transfer-request',
                        'developers/transactions/profiles/refuse-dtag-transfer-request',
                        'developers/transactions/profiles/cancel-dtag-transfer-request',
                        'developers/transactions/profiles/link-application',
                        'developers/transactions/profiles/unlink-application',
                        'developers/transactions/profiles/link-chain-account',
                        'developers/transactions/profiles/unlink-chain-account',
                    ],
                    Relationships: [
                        'developers/transactions/relationships/create-relationship',
                        'developers/transactions/relationships/delete-relationship',
                        'developers/transactions/relationships/block-user',
                        'developers/transactions/relationships/unblock-user',
                    ],
                    Subspaces: [
                        'developers/transactions/subspaces/create-subspace',
                        'developers/transactions/subspaces/edit-subspace',
                        'developers/transactions/subspaces/delete-subspace',
                        'developers/transactions/subspaces/set-user-permissions',
                        'developers/transactions/subspaces/create-user-group',
                        'developers/transactions/subspaces/edit-user-group',
                        'developers/transactions/subspaces/add-user-to-group',
                        'developers/transactions/subspaces/remove-user-from-user-group',
                        'developers/transactions/subspaces/set-user-group-permissions',
                        'developers/transactions/subspaces/delete-user-group'
                    ]
                  },
              ],
            },
            {
                Queries: [
                    {
                        Profiles: [
                            'developers/queries/profiles/profile',
                            'developers/queries/profiles/incoming-dtag-requests',
                            'developers/queries/profiles/chain-links',
                            'developers/queries/profiles/application-links',
                        ],
                        Relationships: [
                            'developers/queries/relationships/relationships',
                            'developers/queries/relationships/blocked-users',
                        ],
                        Subspaces: [
                            'developers/queries/subspaces/subspaces',
                            'developers/queries/subspaces/subspace',
                            'developers/queries/subspaces/user-groups',
                            'developers/queries/subspaces/user-group',
                            'developers/queries/subspaces/user-group-members',
                            'developers/queries/subspaces/user-permissions'
                        ]
                    }
                ],
            },
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
              'fullnode/update',
              'fullnode/rocksdb-installation',
              'fullnode/cosmovisor'
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
          label: 'Testnets',
          collapsed: true,
          items: [
              'testnets/overview',
              'testnets/create-local',
              {
                  'Join the public testnet': [
                      'testnets/join-public/setup',
                      'testnets/join-public/genesis-file',
                      'testnets/join-public/seeds',
                      'testnets/join-public/state-sync',
                      'testnets/join-public/full-sync'
                  ],


              },

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
            'mainnet/security'
          ]
      }
      /*{
        type: 'autogenerated',
        dirName: '.'
      }*/
  ],
};
