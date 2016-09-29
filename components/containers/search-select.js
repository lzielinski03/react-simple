const { Input, List } = window.Dumb

const SearchSelect = React.createClass({
	getInitialState: function() {
		return { 
			filterList: [],
			searchText: ''
		}
	},/*
	submit: function() {
		const selected = this.state.filterList.filter( item => item.active)
		let result = null
		if (selected.length == 0)
			result = {id: null, name: this.state.searchText}
		else
			result = selected[0]
		this.setState({ filterList: [], searchText: '' })
		this.props.add( result )

	},
	selectNext: function(direction) {
		if (this.state.filterList.length == 0) return;
		let tmp = [...this.state.filterList]

		if (tmp.filter( item => item.active).length == 0){
			let item = direction == 'up' ? tmp.length - 1 : 0
			tmp[item].active = true
		} else {
			let mod = direction == 'up' ? -1 : 1
			let index = tmp.findIndex( item => item.active )
			tmp[index].active = false
			index += mod
			if (index < 0) index = tmp.length -1
			if (index == tmp.length) index = 0
			tmp[index].active = true
		}

		this.setState({ filterList: tmp })
	},
	fillWithSelected: function() {
		if (this.state.filterList.length == 0) return;
		let selectedText = this.state.filterList.filter( item => item.active )[0].name
		this.setState({ searchText: selectedText })
	},
	handleUserInput: function(searchText) {
		let filterList = this.filterList(searchText)
		this.setState({
			searchText: searchText,
			filterList: filterList
		})
	},
	// CONTAINS??
	filterList: function(searchText) {
		return this.props.list.filter( item => {
			if ( item.name.search(searchText) != -1 && searchText.length > 0 )
				return true;
		}).map( item => {
			item.active = item.name == searchText ? true : false
			return item
		})
	},
	handleUserKeys: function(key) {
		switch(key) {
			case 13:
				this.submit()
				break
			case 27:
				this.setState({ filterList: [] })
				break
			case 38:
				this.selectNext('up')
				break
			case 39:
				this.fillWithSelected()
				break
			case 40:
				this.selectNext('down')
				break
		}
	},*/
	render: function() {
		console.log(this.props.list)
		return (
			<div>
				<button>select</button>
				<Input
					value={this.state.searchText}
					onUserInput={this.handleUserInput}
					onUserKey={this.handleUserKeys}/>

				<List
					list2={this.state.filterList}
					list={this.state.filterList}
					/>
			</div>
		)
	}
})

window.Smart.SearchSelect = SearchSelect