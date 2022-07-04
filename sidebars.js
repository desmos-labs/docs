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
                    //Subspaces:[],
                    //Posts:[],
                    //Reactions:[],
                    //Reports:[],
                    Fees:[
                       'developers/modules/fees/overview',
                       'developers/modules/fees/concepts',
                       'developers/modules/fees/state',
                       'developers/modules/fees/ante-handlers',
                       'developers/modules/fees/parameters',
                       'developers/modules/fees/client'
                    ],
                    Supply:[
                       'developers/modules/supply/overview',
                       'developers/modules/supply/concepts',
                       'developers/modules/supply/client'
                    ]
                }
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
                      'testnet/join-public/full-sync'
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
