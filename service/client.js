const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:6000');


ws.on('error', console.error);

const id = 100
ws.on('open', function open() {
  ws.send(`{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "initialize",
    "params": {
      "processId": null,
      "clientInfo": {
        "name": "Code - OSS Dev",
        "version": "1.81.0"
      },
      "locale": "en",
      "rootPath": "/tmp",
      "rootUri": "file:///tmp",
      "capabilities": {
        "workspace": {
          "applyEdit": true,
          "workspaceEdit": {
            "documentChanges": true,
            "resourceOperations": ["create", "rename", "delete"],
            "failureHandling": "textOnlyTransactional",
            "normalizesLineEndings": true,
            "changeAnnotationSupport": {
              "groupsOnLabel": true
            }
          },
          "configuration": true,
          "didChangeWatchedFiles": {
            "dynamicRegistration": true,
            "relativePatternSupport": true
          },
          "symbol": {
            "dynamicRegistration": true,
            "symbolKind": {
              "valueSet": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
            },
            "tagSupport": {
              "valueSet": [1]
            },
            "resolveSupport": {
              "properties": ["location.range"]
            }
          },
          "codeLens": {
            "refreshSupport": true
          },
          "executeCommand": {
            "dynamicRegistration": true
          },
          "didChangeConfiguration": {
            "dynamicRegistration": true
          },
          "semanticTokens": {
            "refreshSupport": true
          },
          "fileOperations": {
            "dynamicRegistration": true,
            "didCreate": true,
            "didRename": true,
            "didDelete": true,
            "willCreate": true,
            "willRename": true,
            "willDelete": true
          },
          "inlineValue": {
            "refreshSupport": true
          },
          "inlayHint": {
            "refreshSupport": true
          },
          "diagnostics": {
            "refreshSupport": true
          }
        },
        "textDocument": {
          "publishDiagnostics": {
            "relatedInformation": true,
            "versionSupport": false,
            "tagSupport": {
              "valueSet": [1, 2]
            },
            "codeDescriptionSupport": true,
            "dataSupport": true
          },
          "synchronization": {
            "dynamicRegistration": true,
            "willSave": true,
            "willSaveWaitUntil": true,
            "didSave": true
          },
          "completion": {
            "dynamicRegistration": true,
            "contextSupport": true,
            "completionItem": {
              "snippetSupport": true,
              "commitCharactersSupport": true,
              "documentationFormat": ["markdown", "plaintext"],
              "deprecatedSupport": true,
              "preselectSupport": true,
              "tagSupport": {
                "valueSet": [1]
              },
              "insertReplaceSupport": true,
              "resolveSupport": {
                "properties": ["documentation", "detail", "additionalTextEdits"]
              },
              "insertTextModeSupport": {
                "valueSet": [1, 2]
              },
              "labelDetailsSupport": true
            },
            "insertTextMode": 2,
            "completionItemKind": {
              "valueSet": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
            },
            "completionList": {
              "itemDefaults": ["commitCharacters", "editRange", "insertTextFormat", "insertTextMode"]
            }
          },
          "hover": {
            "dynamicRegistration": true,
            "contentFormat": ["markdown", "plaintext"]
          },
          "signatureHelp": {
            "dynamicRegistration": true,
            "signatureInformation": {
              "documentationFormat": ["markdown", "plaintext"],
              "parameterInformation": {
                "labelOffsetSupport": true
              },
              "activeParameterSupport": true
            },
            "contextSupport": true
          },
          "definition": {
            "dynamicRegistration": true,
            "linkSupport": true
          },
          "references": {
            "dynamicRegistration": true
          },
          "documentHighlight": {
            "dynamicRegistration": true
          },
          "documentSymbol": {
            "dynamicRegistration": true,
            "symbolKind": {
              "valueSet": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
            },
            "hierarchicalDocumentSymbolSupport": true,
            "tagSupport": {
              "valueSet": [1]
            },
            "labelSupport": true
          },
          "codeAction": {
            "dynamicRegistration": true,
            "isPreferredSupport": true,
            "disabledSupport": true,
            "dataSupport": true,
            "resolveSupport": {
              "properties": ["edit"]
            },
            "codeActionLiteralSupport": {
              "codeActionKind": {
                "valueSet": ["", "quickfix", "refactor", "refactor.extract", "refactor.inline", "refactor.rewrite", "source", "source.organizeImports"]
              }
            },
            "honorsChangeAnnotations": false
          },
          "codeLens": {
            "dynamicRegistration": true
          },
          "formatting": {
            "dynamicRegistration": true
          },
          "rangeFormatting": {
            "dynamicRegistration": true
          },
          "onTypeFormatting": {
            "dynamicRegistration": true
          },
          "rename": {
            "dynamicRegistration": true,
            "prepareSupport": true,
            "prepareSupportDefaultBehavior": 1,
            "honorsChangeAnnotations": true
          },
          "documentLink": {
            "dynamicRegistration": true,
            "tooltipSupport": true
          },
          "typeDefinition": {
            "dynamicRegistration": true,
            "linkSupport": true
          },
          "implementation": {
            "dynamicRegistration": true,
            "linkSupport": true
          },
          "colorProvider": {
            "dynamicRegistration": true
          },
          "foldingRange": {
            "dynamicRegistration": true,
            "rangeLimit": 5000,
            "lineFoldingOnly": true,
            "foldingRangeKind": {
              "valueSet": ["comment", "imports", "region"]
            },
            "foldingRange": {
              "collapsedText": false
            }
          },
          "declaration": {
            "dynamicRegistration": true,
            "linkSupport": true
          },
          "selectionRange": {
            "dynamicRegistration": true
          },
          "callHierarchy": {
            "dynamicRegistration": true
          },
          "semanticTokens": {
            "dynamicRegistration": true,
            "tokenTypes": ["namespace", "type", "class", "enum", "interface", "struct", "typeParameter", "parameter", "variable", "property", "enumMember", "event", "function", "method", "macro", "keyword", "modifier", "comment", "string", "number", "regexp", "operator", "decorator"],
            "tokenModifiers": ["declaration", "definition", "readonly", "static", "deprecated", "abstract", "async", "modification", "documentation", "defaultLibrary"],
            "formats": ["relative"],
            "requests": {
              "range": true,
              "full": {
                "delta": true
              }
            },
            "multilineTokenSupport": false,
            "overlappingTokenSupport": false,
            "serverCancelSupport": true,
            "augmentsSyntaxTokens": true
          },
          "linkedEditingRange": {
            "dynamicRegistration": true
          },
          "typeHierarchy": {
            "dynamicRegistration": true
          },
          "inlineValue": {
            "dynamicRegistration": true
          },
          "inlayHint": {
            "dynamicRegistration": true,
            "resolveSupport": {
              "properties": ["tooltip", "textEdits", "label.tooltip", "label.location", "label.command"]
            }
          },
          "diagnostic": {
            "dynamicRegistration": true,
            "relatedDocumentSupport": false
          }
        },
        "window": {
          "showMessage": {
            "messageActionItem": {
              "additionalPropertiesSupport": true
            }
          },
          "showDocument": {
            "support": true
          },
          "workDoneProgress": true
        },
        "general": {
          "staleRequestSupport": {
            "cancel": true,
            "retryOnContentModified": ["textDocument/semanticTokens/full", "textDocument/semanticTokens/range", "textDocument/semanticTokens/full/delta"]
          },
          "regularExpressions": {
            "engine": "ECMAScript",
            "version": "ES2020"
          },
          "markdown": {
            "parser": "marked",
            "version": "1.1.0"
          },
          "positionEncodings": ["utf-16"]
        },
        "notebookDocument": {
          "synchronization": {
            "dynamicRegistration": true,
            "executionSummarySupport": true
          }
        }
      },
      "trace": "off",
      "workspaceFolders": [{
        "uri": "file:///tmp",
        "name": "workspace"
      }]
    }
}`);
  setTimeout(() => {
    ws.send(`{"jsonrpc":"2.0","method":"initialized","params":{}}`)
    setTimeout(() => {
      ws.send(`{"jsonrpc":"2.0","method":"textDocument/didOpen","params":{"textDocument":{"uri":"file:///tmp/hello.py","languageId":"python","version":1,"text":""}}}`)
      ws.send(`{"jsonrpc":"2.0","id":1,"method":"textDocument/codeAction","params":{"textDocument":{"uri":"file:///tmp/hello.py"},"range":{"start":{"line":0,"character":0},"end":{"line":0,"character":0}},"context":{"diagnostics":[],"triggerKind":2}}}`)
      setTimeout(() => {
        ws.send(`{"jsonrpc":"2.0","id":1,"result":[null]}`)
      }, 100)
    }, 100)
  }, 100)
  setTimeout(() => {
    console.log('开始修改文件')
    ws.send(`{"jsonrpc":"2.0","id":3,"method":"textDocument/codeAction","params":{"textDocument":{"uri":"file:///tmp/hello.py"},"range":{"start":{"line":0,"character":1},"end":{"line":0,"character":1}},"context":{"diagnostics":[],"triggerKind":2}}}`)
    setTimeout(() => {
      ws.send(`{"jsonrpc":"2.0","method":"textDocument/didChange","params":{"textDocument":{"uri":"file:///tmp/hello.py","version":2},"contentChanges":[{"range":{"start":{"line":0,"character":1},"end":{"line":0,"character":1}},"rangeLength":0,"text":"de"}]}}`)
      ws.send(`{"jsonrpc":"2.0","id":${id},"method":"textDocument/completion","params":{"textDocument":{"uri":"file:///tmp/hello.py"},"position":{"line":0,"character":2},"context":{"triggerKind":1}}}`)
    }, 1000)
  }, 3000)
});
let tag = 1
ws.on('message', function message(data) {

  try {
    let obj = JSON.parse(data)
    if (obj.error) {
      console.log('异常:', obj.error)
    }
    console.log('received: %s', obj);
    if (obj.method === 'workspace/configuration') {
      ws.send(`{"jsonrpc":"2.0","id":${obj.id},"result":[null]}`)
    } else if (obj.method === 'client/registerCapability') {
      ws.send(`{"jsonrpc":"2.0","id":${obj.id},"result":null}`)
    } else if (obj.result && obj.result.capabilities) {
    } else if (obj.id === id) {
      console.log(getTips(obj.result, 'de'));
    }
  } catch (error) {
    console.error(error)
  }
});

function getTips (params, key) {
  const list = params.items.filter((ele) => {
    return ele.label.startsWith(key)
  })
  return list
}
