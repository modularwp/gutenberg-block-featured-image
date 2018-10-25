const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PostFeaturedImage } = wp.editor;

registerBlockType( 'mdlr/featured-image', {
	title: __( 'Featured Image' ),
	icon: 'format-image',
	category: 'common',
	edit( { className } ) {
		return (
			<div className={ className }>
				<PostFeaturedImage />
			</div>
		);
	},
	save( { className } ) {
		// Doesn't save an data. Defer's to theme's placement of featured image.
		return '';
	},
} );
