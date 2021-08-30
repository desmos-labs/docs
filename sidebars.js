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
        collapsed: false,
        items: [
            'developers/overview',
            {
                Types: [
                    {
                        Profiles: [
                            'developers/types/profiles/profile',
                            'developers/types/profiles/profile-pictures',
                            'developers/types/profiles/dtag-transfer-request',
                            'developers/types/profiles/relationship',
                            'developers/types/profiles/user-block',
                            'developers/types/profiles/application-link',
                            'developers/types/profiles/chain-link'
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
                        'developers/transactions/profiles/create-relationship',
                        'developers/transactions/profiles/delete-relationship',
                        'developers/transactions/profiles/block-user',
                        'developers/transactions/profiles/unblock-user',
                        'developers/transactions/profiles/link-application',
                        'developers/transactions/profiles/unlink-application',
                        'developers/transactions/profiles/link-chain-account',
                        'developers/transactions/profiles/unlink-chain-account',
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
                            'developers/queries/profiles/relationships',
                            'developers/queries/profiles/blocked-users',
                            'developers/queries/profiles/chain-links',
                            'developers/queries/profiles/application-links',
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
          collapsed: false,
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
          collapsed: false,
          items: [
              'validators/overview',
              'validators/security',
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
          collapsed: false,
          items: [
              'testnets/overview',
              'testnets/create-local',
              'testnets/join-public'
          ]
      },
      /*{
        type: 'autogenerated',
        dirName: '.'
      }*/
  ],
};
