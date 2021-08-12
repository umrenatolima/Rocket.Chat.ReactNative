import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Touch from '../../utils/touch';
import sharedStyles from '../Styles';

export default styles = StyleSheet.create({
	container: {
		flex: 1
	},
	list: {
		width: '100%'
	},
	dropdownContainerHeader: {
		height: 41,
		borderBottomWidth: StyleSheet.hairlineWidth,
		alignItems: 'center',
		flexDirection: 'row'
	},
	dropdownContainer: {
		width: '100%',
		position: 'absolute',
		top: 0,
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	backdrop: {
		...StyleSheet.absoluteFill
	},
	queueIcon: {
		marginHorizontal: 12
	},
	omnichannelRightContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	groupTitleContainer: {
		paddingHorizontal: 12,
		paddingTop: 17,
		paddingBottom: 10
	},
	groupTitle: {
		fontSize: 16,
		letterSpacing: 0.27,
		flex: 1,
		lineHeight: 24,
		...sharedStyles.textBold
	},
	serverHeader: {
		justifyContent: 'space-between'
	},
	serverHeaderText: {
		fontSize: 16,
		marginLeft: 12,
		...sharedStyles.textRegular
	},
	serverHeaderAdd: {
		fontSize: 16,
		marginRight: 12,
		paddingVertical: 10,
		...sharedStyles.textRegular
	},
	bottomMenu: {
		height: 60,
		paddingVertical: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	bottomMenuIcon: {
		flex: 1,
		alignSelf: 'center'
	}
});

export const BottomMenu = ({ children }) => (
	<View style={styles.bottomMenu}>
		{children}
	</View>
);

BottomMenu.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
};

BottomMenu.displayName = 'BottomMenuContainer';

export const Item = ({
	onPress, children, testID, theme
}) => (
	<Touch
		key={testID}
		testID={testID}
		theme={theme}
		onPress={onPress}
		style={styles.bottomMenuIcon}
	>
		<View style={styles.bottomMenuIcon}>
			{children}
		</View>
	</Touch>
);

Item.propTypes = {
	onPress: PropTypes.func,
	children: PropTypes.arrayOf(PropTypes.element),
};

Item.displayName = 'BottomMenuItem';