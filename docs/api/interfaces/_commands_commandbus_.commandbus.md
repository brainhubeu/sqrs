[@brainhubeu/sqrs](../README.md) › ["commands/CommandBus"](../modules/_commands_commandbus_.md) › [CommandBus](_commands_commandbus_.commandbus.md)

# Interface: CommandBus <**T**>

Interface for command bus that allows dispatching commands to appropriate handlers

**`interface`** CommandBus

## Type parameters

▪ **T**

type of result returned after dispatching a command

## Hierarchy

* **CommandBus**

## Implemented by

* [DefaultCommandBus](../classes/_commands_defaultcommandbus_.defaultcommandbus.md)

## Index

### Methods

* [dispatch](_commands_commandbus_.commandbus.md#dispatch)

## Methods

###  dispatch

▸ **dispatch**(`command`: [Command](sqrs.command.md)): *Promise‹T›*

*Defined in [commands/CommandBus.ts:26](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/CommandBus.ts#L26)*

Dispatches a command to appropriate command handler

**`memberof`** CommandBus

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | [Command](sqrs.command.md) | command to dispatch |

**Returns:** *Promise‹T›*

result of dispatching
